# Generated by Django 3.0.7 on 2020-06-17 11:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_auto_20200617_1144'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bootcampdata',
            name='bootcamp_image',
        ),
    ]