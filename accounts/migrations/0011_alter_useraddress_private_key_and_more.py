# Generated by Django 5.1.3 on 2024-11-20 16:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_official_cardy_cardy_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraddress',
            name='private_key',
            field=models.CharField(default='ea1b83f056963588db89f6f3e4d5089d957d8f7140c1ea19485f696a06405785', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='public_key',
            field=models.CharField(default='DK625BvglOIoM25eDZzwroaOnhr0YFy+/3kaPYdbLKN4/a6kmMltnpbrbfKsM8k32bLpi2kBGSLtr7t0my2t1w==', max_length=250, null=True),
        ),
    ]