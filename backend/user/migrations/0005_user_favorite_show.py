# Generated by Django 3.0.6 on 2020-05-10 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_user_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='favorite_show',
            field=models.TextField(null=True, verbose_name='Favorite show'),
        ),
    ]
