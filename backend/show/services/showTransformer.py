
class ShowResponseToModelTransformer(object):

    def __init__(self, show_info):
        self.data = show_info

    def get_title(self):
        return self.data.get('Title', '')

    def get_show_type(self):
        return self.data.get('Type', '')

    def get_poster(self):
        return self.data.get('Poster', None)

    def get_plot(self):
        return self.data.get('Plot', None)

    def get_imdb_rating(self):
        return self.data.get('imdbRating', '')

    def get_countries(self):
        return self.data.get('Country', '')

    def get_actors_list(self):
        return [
            actor_name.strip() for actor_name in
            self.data.get('Actors', '').split(',')
        ]

    def get_genres_list(self):
        return [
            genre.strip() for genre in
            self.data.get('Genre', '').split(',')
        ]

    def transform_general_info(self):
        return {
            'title': self.get_title(),
            'showtype': self.get_show_type(),
            'poster_url': self.get_poster(),
            'plot': self.get_plot(),
            'imdb_rating': self.get_imdb_rating(),
            'countries': self.get_countries()
        }