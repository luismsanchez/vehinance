# Generated by Django 3.2.7 on 2022-01-20 03:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vehinanceApp', '0002_auto_20220103_1923'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='time_interval',
            field=models.PositiveIntegerField(choices=[(1, 'daily'), (7, 'weekly'), (30, 'monthly'), (90, 'three-monthly'), (180, 'six-monthly'), (365, 'yearly'), (730, 'two-yearly'), (1095, 'three-yearly'), (1460, 'four-yearly'), (1825, 'five-yearly'), (2190, 'six-yearly'), (2555, 'seven-yearly'), (2920, 'eight-yearly')], default=0),
        ),
    ]
