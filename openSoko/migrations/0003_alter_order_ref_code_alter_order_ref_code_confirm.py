# Generated by Django 5.0.4 on 2024-06-10 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openSoko', '0002_alter_order_ref_code_alter_order_ref_code_confirm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='ref_code',
            field=models.CharField(blank=True, default=b'PR5pwgGBDyhvANKG0YtYNQVuF8ZqiagcnHenLqlw6KbmiPBv6rCYKnE0Yb4/hrzgdmPYLgwPwDUmROKpD0jI+A==', max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='ref_code_confirm',
            field=models.CharField(blank=True, default='e68eca1881cd90dc65adbf19ecd682ad2d929991de48b87d3cb27743e12c171a', max_length=200),
        ),
    ]
