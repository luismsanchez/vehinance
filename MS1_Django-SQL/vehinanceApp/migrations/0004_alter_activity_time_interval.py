# Generated by Django 3.2.7 on 2022-01-20 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehinanceApp', '0003_alter_activity_time_interval'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='time_interval',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
