# Generated by Django 3.1.1 on 2020-11-20 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('report', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='reportfile',
            field=models.FileField(blank=True, null=True, upload_to='reports/', verbose_name=''),
        ),
    ]
