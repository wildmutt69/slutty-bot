import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
export const serve = (client) => {
    let n = -1, lastDisconnect = 0;
    new Server(createServer(express().get('/', ({}, res) => {
        res.end(`Node server ${process.pid} online.`);
    })).listen(8080, () => {
        console.log(`\x1b[1;38;2;255;255;0mNode server ${process.pid} online on port 8080.\x1b[0m`);
        console.log(`\x1b[1;38;2;0;255;0m${new Date().toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Kolkata',
            timeZoneName: 'short'
        })}\x1b[0m`);
    })).on('connection', socket => {
        n++;
        socket.on('disconnect', () => {
            lastDisconnect = Date.now();
            console.log(`Socket Disconnected: \x1b[1;38;2;0;255;255m'${socket.id}'.\x1b[0m(${n})`);
        });
        if (client.isReady()) {
            if (n == 0) {
                socket.emit('ready', client.user.tag, client.readyTimestamp - client.runAt);
                console.log(`Socket connected: \x1b[1;38;2;0;255;255m'${socket.id}'.\x1b[0m(${n})`);
                return;
            }
            socket.emit('reconnect', n, socket.handshake.issued - lastDisconnect);
            console.log(`Socket connected: \x1b[1;38;2;0;255;255m'${socket.id}'.\x1b[0m(${n})`);
        }
        client.once('ready', () => {
            socket.emit('ready', client.user.tag);
            console.log(`Socket connected: \x1b[1;38;2;0;255;255m'${socket.id}'.\x1b[0m(${n})`);
        });
    });
};
