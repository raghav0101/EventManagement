# Generated by Django 2.2.6 on 2020-06-10 04:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0011_auto_20191028_1624'),
    ]

    operations = [
        migrations.AddField(
            model_name='organisation',
            name='password',
            field=models.CharField(default='password', max_length=128, null=True),
        ),
    ]
