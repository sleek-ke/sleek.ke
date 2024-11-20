# Generated by Django 5.0.4 on 2024-06-05 05:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SendMoney',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sent_time', models.DateTimeField(auto_now_add=True)),
                ('Amount', models.DecimalField(decimal_places=2, max_digits='5')),
            ],
        ),
    ]
