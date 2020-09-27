# Generated by Django 3.1.1 on 2020-09-27 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authapp', '0002_user_user_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_role',
            field=models.IntegerField(choices=[(0, 'Admin'), (1, 'Doctor'), (2, 'Patient')], default=2),
        ),
    ]
