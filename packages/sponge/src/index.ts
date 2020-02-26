/// <reference types="@ms/types/dist/typings/sponge" />

import { server } from '@ms/api'
import { Container } from '@ms/container'

import { SpongeConsole } from './console';
import './event';
import './server';
import './command';
import './channel';
import './task';

export default function SpongeImpl(container: Container) {
    container.bind(server.Console).toConstantValue(SpongeConsole);
}
