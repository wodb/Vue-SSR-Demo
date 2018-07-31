## Features

> Note: in practice, it is unnecessary to code-split for an app of this size (where each async chunk is only a few kilobytes), nor is it optimal to extract an extra CSS file (which is only 1kb) -- they are used simply because this is a demo app showcasing all the supported features. In real apps, you should always measure and optimize based on your actual app constraints.

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
  - Automatically inlines CSS used by rendered components only
  - Preload / prefetch resource hints
  - Route-level code splitting
- Progressive Web App
  - App manifest
  - Service worker
  - 100/100 Lighthouse score
- Single-file Vue Components
  - Hot-reload in development
  - CSS extraction for production
- Animation
  - Effects when switching route views
  - Real-time list updates with FLIP Animation

## Architecture Overview

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

**A detailed Vue SSR guide can be found [here](https://ssr.vuejs.org).**

## Build Setup

**Requires Node.js 7+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

## nginx-proxy
**本地host 指向自己的ip地址 test.mac.com**

```
  worker_processes  1;
  events {
      worker_connections  1024;
  }

  http {
      include       mime.types;
      default_type  application/octet-stream;
      log_format main '$request_time $remote_addr - $remote_user [$time_local] '
                      'fwf[$http_x_forwarded_for] tip[$http_true_client_ip] '
                      '$upstream_addr $upstream_response_time $request_time '
                      '$http_host $request '
                      '"$status" $body_bytes_sent "$http_referer" '
                      '"$http_accept_language" "$http_user_agent" ';
      access_log  logs/access.log  main;
      sendfile        on;
      keepalive_timeout  65;
      add_header Access-Control-Allow-Origin *;
      add_header Access-Control-Allow-Headers X-Requested-With;
      add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
      server {
        listen       80;
        server_name  test.mac.com;
        location / {
            proxy_pass  https://recommender-api-ms.juejin.im;
            proxy_redirect off;
            client_max_body_size   10m;
            client_body_buffer_size  128k;
            proxy_connect_timeout  10;
            proxy_send_timeout   10;
            proxy_read_timeout 10;
            proxy_buffer_size 4k;
            proxy_buffers  32 1024k;
            proxy_busy_buffers_size 2048k;
            proxy_temp_file_write_size  1024k;
        }
          
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
      }
  }

```

## License

MIT
