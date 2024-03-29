# Generated by Django 2.2.6 on 2019-10-25 17:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('event_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('event_name', models.CharField(max_length=50)),
                ('event_type', models.CharField(max_length=20)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Managing_Team',
            fields=[
                ('team_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('phn_no', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Organisation',
            fields=[
                ('org_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('org_name', models.CharField(max_length=50)),
                ('org_location', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=20, null=True)),
                ('phn_no', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('payment_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('mode', models.CharField(max_length=20)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=20)),
                ('phn_no', models.CharField(max_length=10)),
                ('gender', models.CharField(max_length=10)),
                ('dob', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Venue',
            fields=[
                ('venue_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('building_name', models.CharField(max_length=50, null=True)),
                ('room_no', models.CharField(max_length=10, null=True)),
                ('availability', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Event')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Users')),
            ],
        ),
        migrations.CreateModel(
            name='Pay',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Payment')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Users')),
            ],
        ),
        migrations.CreateModel(
            name='Org',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Event')),
                ('org_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Organisation')),
            ],
        ),
        migrations.CreateModel(
            name='Managing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Event')),
                ('team_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.Managing_Team')),
            ],
        ),
    ]
