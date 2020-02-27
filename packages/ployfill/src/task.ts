(function nashornEventLoopMain(context) {
    'use strict';

    var Thread = Java.type('java.lang.Thread');
    var Phaser = Java.type('java.util.concurrent.Phaser');
    var ArrayDeque = Java.type('java.util.ArrayDeque');
    var HashMap = Java.type('java.util.HashMap');
    var TimeUnit = Java.type("java.util.concurrent.TimeUnit");
    var Runnable = Java.type('java.lang.Runnable');

    var globalTimerId;
    var timerMap;
    var eventLoop;
    var phaser = new Phaser();

    // __NASHORN_POLYFILL_TIMER__ type is ScheduledExecutorService
    var scheduler = context.__NASHORN_POLYFILL_TIMER__;

    resetEventLoop();

    //   console.log('main javasript thread ' + Thread.currentThread().getName());

    function resetEventLoop() {
        globalTimerId = 1;
        if (timerMap) {
            timerMap.forEach(function(key, value) {
                value.cancel(true);
            })
        }
        timerMap = new HashMap();
        eventLoop = new ArrayDeque();
    }

    function waitForMessages() {
        phaser.register();
        var wait = !(eventLoop.size() === 0);
        phaser.arriveAndDeregister();
        return wait;
    }

    function processNextMessages() {
        var remaining = 1;
        while (remaining) {
            phaser.register();
            var message = eventLoop.removeFirst();
            remaining = eventLoop.size();
            phaser.arriveAndDeregister();

            var fn = message.fn;
            var args = message.args;

            try {
                fn.apply(context, args);
            } catch (e) {
                console.trace(e);
                console.trace(fn);
                console.trace(args);
            }
        }
    }

    context.nashornEventLoop = {
        process: function() {
            while (waitForMessages()) {
                processNextMessages()
            }
        },
        reset: resetEventLoop
    };


    function createRunnable(fn, timerId, args, repeated) {
        return new Runnable({
            run: function() {
                try {
                    var phase = phaser.register();
                    eventLoop.addLast({
                        fn: fn,
                        args: args
                    });
                } catch (e) {
                    console.trace(e);
                } finally {
                    if (!repeated) timerMap.remove(timerId);
                    phaser.arriveAndDeregister();
                }
            }
        })
    }

    var setTimeout = function(fn, millis /* [, args...] */) {
        var args = [].slice.call(arguments, 2, arguments.length);

        var timerId = globalTimerId++;
        var runnable = createRunnable(fn, timerId, args, false);

        var task = scheduler.schedule(runnable, millis, TimeUnit.MILLISECONDS);
        timerMap.put(timerId, task);

        return timerId;
    };

    var setImmediate = function(fn /* [, args...] */) {
        var args = [].slice.call(arguments, 1, arguments.length);
        // @ts-ignore
        return setTimeout(fn, 0, args);
    }

    var clearImmediate = function(timerId) {
        clearTimeout(timerId);
    }

    var clearTimeout = function(timerId) {
        var task = timerMap.get(timerId);
        if (task) {
            task.cancel(true);
            timerMap.remove(timerId);
        }
    };

    var setInterval = function(fn, delay /* [, args...] */) {
        var args = [].slice.call(arguments, 2, arguments.length);
        var timerId = globalTimerId++;
        var runnable = createRunnable(fn, timerId, args, true);
        var task = scheduler.scheduleWithFixedDelay(runnable, delay, delay, TimeUnit.MILLISECONDS);
        timerMap.put(timerId, task);
        return timerId;
    };

    var clearInterval = function(timerId) {
        clearTimeout(timerId);
    };

    context.setTimeout = setTimeout;
    context.clearTimeout = clearTimeout;
    context.setImmediate = setImmediate;
    context.clearImmediate = clearImmediate;
    context.setInterval = setInterval;
    context.clearInterval = clearInterval;
    // @ts-ignore
})(typeof global !== "undefined" && global || typeof self !== "undefined" && self || this);