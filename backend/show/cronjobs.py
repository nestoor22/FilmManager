from .services.omdbApiService import OMDBApiService


def search_new_shows():
    OMDBApiService().add_new_items()