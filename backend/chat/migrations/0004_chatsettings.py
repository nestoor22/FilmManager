# Generated by Django 3.1.2 on 2020-10-27 21:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_auto_20201024_1801'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChatSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notifications_enabled', models.BooleanField(default=True)),
                ('notifications_sound', models.FileField(null=True, upload_to='chat_notifications/')),
                ('popups_enabled', models.BooleanField(default=True)),
                ('chat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chat.chat')),
            ],
        ),
    ]
