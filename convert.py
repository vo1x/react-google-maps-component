geo_json_coordinates = {
        "type": "LineString",
        "coordinates": [[
            [
                -79.8485742,
                41.8917335
            ],
            [
                -79.8484862,
                41.8917384
            ],
            [
                -79.8484681,
                41.8917393
            ],
            [
                -79.8468445,
                41.8918347
            ],
            [
                -79.8467631,
                41.8918382
            ],
            [
                -79.8466935,
                41.8918412
            ],
            [
                -79.8450768,
                41.8919396
            ],
            [
                -79.8443569,
                41.8919752
            ],
            [
                -79.8439729,
                41.8919942
            ],
            [
                -79.8438708,
                41.8920045
            ],
            [
                -79.8437873,
                41.8920482
            ]]
        ]
    }
# Extract coordinates from the GeoJSON structure
coordinates = geo_json_coordinates["coordinates"][0]

# Convert each coordinate pair to { lat, lng } format
converted_coordinates = [{"lat": lat, "lng": lng} for lng, lat in coordinates]

print(converted_coordinates)
