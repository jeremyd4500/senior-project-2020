# Generated by Django 3.1.1 on 2020-09-27 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authapp', '0004_auto_20200927_2019'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='sex',
            field=models.IntegerField(choices=[(0, 'MALE'), (1, 'FEMALE')], null=True),
        ),
    ]
