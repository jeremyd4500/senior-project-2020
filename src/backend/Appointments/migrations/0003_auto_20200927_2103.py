# Generated by Django 3.1.1 on 2020-09-27 21:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Appointments', '0002_appointment_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='ap_date',
            new_name='appointment_date',
        ),
    ]