from .models import Shows, ShowActors, ShowGenre, Actors, Genres


class ShowStrategy(object):
    model = Shows

    def __init__(self, show_id=None):
        self.show_id = show_id

    @classmethod
    def get_objects(cls):
        return cls.model.objects.all()

    def create_show_actor_relation(self, actors):
        objects_to_create = []
        for actor in actors:
            actor_obj = Actors.objects.filter(name=actor).first()
            if not actor_obj:
                actor_obj = Actors.objects.create(
                    name=actor, number_of_films=1)
            else:
                actor_obj.number_of_films += 1
                actor_obj.save()

            objects_to_create.append(
                ShowActors(actor=actor_obj, show_id=self.show_id))

        ShowActors.objects.bulk_create(objects_to_create)

    def create_show_genre_relation(self, genres):
        objects_to_create = []
        for genre in genres:
            genre_obj = Genres.objects.filter(genre_name=genre).first()
            if not genre_obj:
                genre_obj = Genres.objects.create(genre_name=genre)

            objects_to_create.append(
                ShowGenre(genre=genre_obj, show_id=self.show_id))

        ShowGenre.objects.bulk_create(objects_to_create)

    def create(self, show_info, actors_info, genres_info):
        show_obj = self.model.objects.create(**show_info)
        self.show_id = show_obj.show_id
        self.create_show_actor_relation(actors_info)
        self.create_show_genre_relation(genres_info)
