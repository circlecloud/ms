/// <reference types="@ccms/nashorn" />
/// <reference types="@javatypes/jdk" />
/// <reference types="@javatypes/spring-jdbc" />

import { loadMavenDepend } from '@ccms/container'

loadMavenDepend('com.h2database', 'h2', '2.1.212')
loadMavenDepend("com.zaxxer", "HikariCP", "4.0.3")
loadMavenDepend("org.springframework", "spring-jdbc", "5.3.19", true)

export * from './database'
export * from './manager'
