import {
	serve
} from "https://deno.land/std/http/server.ts"

serve((
	console.log(`\x1b[1;38;2;255;255;0mDeno server ${Deno.pid} online on port 8080.\n\x1b[1;38;2;0;255;0m${
		new Date().toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Kolkata',
      timeZoneName: 'short'
    })
	}\x1b[0m.`),
  req => new Response(`Deno server ${Deno.pid} online.`)
), { port: 8080 })