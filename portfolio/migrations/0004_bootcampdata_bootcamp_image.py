# Generated by Django 3.0.7 on 2020-06-17 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_bootcampdata'),
    ]

    operations = [
        migrations.AddField(
            model_name='bootcampdata',
            name='bootcamp_image',
            field=models.ImageField(default=None, upload_to='BootcampPics/'),
        ),
    ]
