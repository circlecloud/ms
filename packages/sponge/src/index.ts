/// <reference types="@ccms/types/dist/typings/sponge" />

import { server } from '@ccms/api'
import { Container } from '@ccms/container'

import { SpongeConsole } from './console';
import './event';
import './server';
import './command';
import './channel';
import './task';

export default function SpongeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(SpongeConsole);
}
