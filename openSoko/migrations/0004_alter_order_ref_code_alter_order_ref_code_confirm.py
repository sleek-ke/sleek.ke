# Generated by Django 5.0.4 on 2024-06-11 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('openSoko', '0003_alter_order_ref_code_alter_order_ref_code_confirm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='ref_code',
            field=models.CharField(blank=True, default=b'iJrLBaUdFvI7EuO3KwanwRe8FRV/xQywGImf3nc2bQ6ySyLlFXineXBwipFHx0q3Cd++DFZ5USOVgYSUwebvbA==', max_length=200),
        ),
        migrations.AlterField(
            model_name='order',
            name='ref_code_confirm',
            field=models.CharField(blank=True, default='fca41d93d59b60bc39eed8bce0412d045e469b77842ed55a441754b72078c650', max_length=200),
        ),
    ]
