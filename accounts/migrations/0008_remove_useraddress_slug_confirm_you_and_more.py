# Generated by Django 5.0.4 on 2024-07-31 22:40

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_alter_official_cardy_cardy_type_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraddress',
            name='slug_Confirm_You',
        ),
        migrations.AddField(
            model_name='useraddress',
            name='private_key',
            field=models.CharField(default='2c611c5e261a72d3bee6a44342ffe394564e8ac21e178ce5a0fe56e4903da802', max_length=250, null=True),
        ),
        migrations.AddField(
            model_name='useraddress',
            name='public_key',
            field=models.CharField(default=b'scqOIAVmDEpoab/7xTGm2HcuP2fotoQc/pr5/Tr1oaaIEIRDrd71msZSOGEVOHE0egVq/xzJTbaV1CXtr/KN2A==', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='slug',
            field=models.SlugField(default=uuid.uuid4),
        ),
    ]
