# Generated by Django 3.0.6 on 2020-06-06 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_user_favorite_show'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.TextField(verbose_name='First name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.TextField(verbose_name='Last name'),
        ),
    ]
