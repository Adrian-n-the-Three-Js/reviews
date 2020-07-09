# Project Name

> Reviews component of Hotellooo

## Related Projects

  - https://github.com/Hotellooo/calendar
  - https://github.com/teamName/about
  - https://github.com/teamName/photos-carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> To be used in conjunction with other Hotellooo components mentioned in related projects section

## Requirements

- Node 10.15.3

## Development

> See installing dependencies instructions

### Installing Dependencies

From within the root directory:

```sh
npm install
npm react-dev
npm seed
```

## Server API

### Get review
  * GET `/reviews/:reviewsid`

**Path Parameters:**
  * `reviewsid` reviews id

**Success Status Code:** `200`

**Error Status Code:** `400`

**Returns:** JSON

```json
    {
      "reviews_id": "Number",
      "user_id": "Number",
      "hotel_id": "Number",
      "review_date": "String",
      "room_tip": "String",
      "trip_type": "String",
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
      "review_helpful_votes": "Number",
    }
```

### Add review
  * POST `/reviews`

**Success Status Code:** `201`

**Error Status Code:** `400`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user_id": "Number",
      "hotel_id": "Number",
      "room_tip": "String",
      "trip_type": "String",
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
    }
```

### Update review
  * PATCH `/reviews/:reviewsid`

**Path Parameters:**
  * `reviewsid` reviews id

**Success Status Code:** `204`

**Error Status Code:** `400`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "reviews_id": "Number",
      "room_tip": "String",
      "trip_type": "String",
      "value_rating": "Number",
      "location_rating": "Number",
      "service_rating": "Number",
      "rooms_rating": "Number",
      "cleanliness_rating": "Number",
      "sleep_quality_rating": "Number",
      "collected_in_part_hotel": "Number",
    }
```

### Delete review
  * DELETE `/reviews/:reviewsid`

**Path Parameters:**
  * `reviewsid` reviews id

**Success Status Code:** `204`

**Error Status Code:** `400`