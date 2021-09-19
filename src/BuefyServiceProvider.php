<?php

namespace Feldsam\LaravelBuefyPreset;

use Illuminate\Support\ServiceProvider;
use Laravel\Ui\UiCommand;

class BuefyServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Register the Buefy preset macro
        UiCommand::macro('buefy', function ($command) {
            Preset::install($command);
        });
    }
}
