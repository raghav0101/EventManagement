# Generated by Django 2.2.6 on 2019-10-27 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0006_where'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='desc',
            field=models.CharField(default='No Description', max_length=100),
        ),
    ]
