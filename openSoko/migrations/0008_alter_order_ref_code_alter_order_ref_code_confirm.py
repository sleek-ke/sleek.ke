# Generated by Django 5.0.4 on 2024-07-31 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openSoko', '0007_alter_order_ref_code_alter_order_ref_code_confirm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='ref_code',
            field=models.CharField(blank=True, default=b'cBinkbMOR9WgyKR5oelPoTtjwTc46DHI9ASKT+vTyU47q2Xrqnr/5O01qCUu1KFKUkO+2/tbBA7hR6tbcExtnQ==', max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='ref_code_confirm',
            field=models.CharField(blank=True, default='8d1b8671648fe0b67313d144d8d3f72f3fdf5a96a297550b524ef224b269d0a5', max_length=200),
        ),
    ]
