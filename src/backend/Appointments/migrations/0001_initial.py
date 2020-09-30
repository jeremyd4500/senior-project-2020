# Generated by Django 3.1.1 on 2020-09-30 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FirstName', models.CharField(max_length=30)),
                ('LastName', models.CharField(max_length=30)),
                ('Age', models.IntegerField()),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('Date', models.DateField(auto_now=True)),
                ('appointment_date', models.DateField(blank=True)),
                ('Time', models.TimeField(blank=True)),
                ('Gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('status', models.IntegerField(choices=[(0, 'Booked'), (1, 'No Show'), (2, 'Seen')], default=0)),
                ('description', models.TextField()),
            ],
        ),
    ]
