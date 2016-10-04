#Schema Information

##users
| **column name** | **data type** | **details** |
| ----- | ----- | ----- |
| id | integer | not null, primary key |
| username | string | not null, indexed, unique |
| user_type | string | not null |
| country | string | |
| bio | text | |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

##knowtation
| **column name** | **data type** | **details** |
| ----- | ----- | ----- |
| id | integer | not null, primary key |
| title | text | not null |
| artist_id | integer | not null, indexed, unique |
| thumbnail_url | string | not null, indexed, unique |
| video_url | string | not null, indexed, unique |
| notation_url | string | not null, indexed, unique |

##tags
| **column name** | **data type** | **details** |
| ----- | ----- | ----- |
| id | integer | not null, primary key |
| name | string | not null, primary key |

##taggings
| **column name** | **data type** | **details** |
| ----- | ----- | ----- |
| id | integer | not null, primary key |
| knowtation_id | integer | not null, foreign key (references knowtation), indexed, unique [tag_id knowtation_id] |
| tag_id | integer | not null, foreign key (references tags), indexed |
