{ pkgs ? import <nixpkgs> {} }:

let
  nodejs-18 = pkgs.nodejs-18;
in

pkgs.mkShell {
  buildInputs = [
    nodejs-18
    pkgs.yarn
  ];

  shellHook = ''
    # Set Node.js version to 18
    export NIX_CFLAGS_COMPILE="-D_GNU_SOURCE"
    export NIX_CFLAGS_LINK="-D_GNU_SOURCE"
    export NIX_LDFLAGS_COMPILE="-D_GNU_SOURCE"
    export NIX_LDFLAGS_LINK="-D_GNU_SOURCE"
    export NIX_STRIP_DEBUG="-D_GNU_SOURCE"
    export NIX_DEBUG=1

    export PATH=$NODEJS_18_BIN:$PATH
  '';

  # Strapi Service
  services.strapi = {
    enable = true;
    package = pkgs.strapi;
    settings = {
      # Add Strapi configuration here if needed
    };
  };

  # SvelteKit Service
  services.sveltekit = {
    enable = true;
    package = pkgs.sveltekit;
    settings = {
      # Add SvelteKit configuration here if needed
    };
  };
}
