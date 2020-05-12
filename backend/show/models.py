from django.db import models

from user.models import User


class Shows(models.Model):
    show_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    showtype = models.CharField(max_length=100)
    poster_url = models.CharField(max_length=500, blank=True, null=True)

    imdb_rating = models.FloatField(blank=True, null=True)
    release_date = models.IntegerField()
    plot = models.TextField()

    class Meta:
        db_table = 'show'
        verbose_name_plural = 'Shows'

    def __str__(self):
        return f"{self.title}"


class Genres(models.Model):
    genre_id = models.AutoField(primary_key=True)
    genre_name = models.CharField(max_length=45)

    class Meta:
        db_table = 'genres'
        verbose_name_plural = 'Genres'

    def __str__(self):
        return self.genre_name


class Actors(models.Model):
    actor_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    number_of_films = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'actors'
        verbose_name_plural = 'Actors'

    def __str__(self):
        return self.name


class ShowActors(models.Model):
    show = models.ForeignKey(Shows, models.CASCADE)
    actor = models.ForeignKey(Actors, models.CASCADE)

    class Meta:
        db_table = 'show_actors'

    def __str__(self):
        return f"Film-{self.show} Actor-{self.actor}"


class ShowGenre(models.Model):
    show = models.ForeignKey(Shows, models.CASCADE)
    genre = models.ForeignKey(Genres, models.CASCADE)

    class Meta:
        db_table = 'show_genre'

    def __str__(self):
        return f"Show-{self.show} Genre-{self.genre}"


class ShowRates(models.Model):
    show = models.ForeignKey(Shows, models.CASCADE)
    user = models.ForeignKey(User, models.CASCADE)

    rating = models.DecimalField('Rating', max_digits=5, decimal_places=2, default=0)

    class Meta:
        db_table = 'show_rates'

    def __str__(self):
        return f"Show-{self.show} rating-{self.rating}"
