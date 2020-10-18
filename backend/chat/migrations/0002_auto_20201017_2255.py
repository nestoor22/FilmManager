# Generated by Django 3.1.2 on 2020-10-17 22:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AlterField(
            model_name='chat',
            name='chat_id',
            field=models.CharField(default='', max_length=155),
        ),
        migrations.AlterField(
            model_name='chat',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]