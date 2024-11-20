# Generated by Django 5.0.4 on 2024-08-01 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_remove_useraddress_slug_confirm_you_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraddress',
            name='National_Passport_No',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='private_key',
            field=models.CharField(default='fa12a11e55005de943816ba9d57a30dcabc302457a30ddf071a98989806e8734', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='useraddress',
            name='public_key',
            field=models.CharField(default='EzSkdzWFz+JW9hIs+ka6gf2fdgh58K/VGtDnTiM3KwTSJDxER5PRNbhJICcEClX9um1PSnf8aij+6Lx3CmiHMA==', max_length=250, null=True),
        ),
    ]
