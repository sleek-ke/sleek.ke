# Generated by Django 5.1.3 on 2024-12-09 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0011_alter_useraddress_private_key_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="useraddress",
            name="private_key",
            field=models.CharField(
                default="8997ef8495d4161a4692e790dbe61a0f852f5f1b9771eff61880bdc84d503188",
                max_length=250,
                null=True,
            ),
        ),
        migrations.AlterField(
            model_name="useraddress",
            name="public_key",
            field=models.CharField(
                default="zvrTtN5Tvpo5tr6ZnGHm40uIthyBykj3kx40pdGN3YNV1j8hJL5UqSWF7a6FR9/sUa86Mou1JBxGtz0KKhc3mg==",
                max_length=250,
                null=True,
            ),
        ),
    ]
