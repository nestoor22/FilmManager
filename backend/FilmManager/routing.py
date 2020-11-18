from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter

from chat.routing import websocket_urlpatterns as chat_websockets_urls
from shows_collections.routing \
    import websocket_urlpatterns as collections_websockets_url


application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            [*chat_websockets_urls, *collections_websockets_url]
        )
    ),
})