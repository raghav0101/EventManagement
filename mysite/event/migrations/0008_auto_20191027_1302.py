# Generated by Django 2.2.6 on 2019-10-27 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0007_event_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='desc',
            field=models.CharField(default='No Description', max_length=500),
        ),
    ]