# Generated by Django 3.1.1 on 2020-10-03 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0007_auto_20200626_0007'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='followed',
            field=models.IntegerField(default=0, verbose_name='Followed'),
        ),
        migrations.AddField(
            model_name='user',
            name='followers',
            field=models.IntegerField(default=0, verbose_name='Followers'),
        ),
    ]