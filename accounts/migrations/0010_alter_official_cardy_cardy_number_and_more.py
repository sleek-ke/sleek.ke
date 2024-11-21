# Generated by Django 5.1.3 on 2024-11-20 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0009_useraddress_national_passport_no_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='official_cardy',
            name='cardy_number',
            field=models.IntegerField(blank=True, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='private_key',
            field=models.CharField(default='5ddc0a4b38ced49d8a8471223e78b2b2f62cf960459cd210091ab55dd426b848', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='public_key',
            field=models.CharField(default='g2Hh7jP+2fJDjgUu8OnlUAYeo3SeL4K6I9OwKoX32ZIeXgQC9PS1dSFQCZG0S307wJ6t4VjGzn0hO00vtZTHTw==', max_length=250, null=True),
        ),
    ]
