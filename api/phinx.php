<?php

return [
    "paths" => [
        "migrations" => "%%PHINX_CONFIG_DIR%%/phinx/migrations",
        "seeds" => "%%PHINX_CONFIG_DIR%%/phinx/seeds",
    ],
    "environments" => [
        "default_migration_table" => "phinxlog",
        "default_environment" => "production",
        "production" => [
            "adapter" => "sqlite",
            "name" => "database",
            "suffix" => ".db",
            "charset" => "utf8",
        ],
    ],
    "version_order" => "creation",
];
