# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161009181552) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "knowtations", force: :cascade do |t|
    t.string   "title",                       null: false
    t.integer  "user_id",                     null: false
    t.text     "scroll_instructions"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.text     "video_url"
    t.string   "notation_image_file_name"
    t.string   "notation_image_content_type"
    t.integer  "notation_image_file_size"
    t.datetime "notation_image_updated_at"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
  end

  add_index "knowtations", ["scroll_instructions"], name: "index_knowtations_on_scroll_instructions", unique: true, using: :btree
  add_index "knowtations", ["user_id"], name: "index_knowtations_on_user_id", using: :btree
  add_index "knowtations", ["video_url"], name: "index_knowtations_on_video_url", unique: true, using: :btree

  create_table "loops", force: :cascade do |t|
    t.integer  "loop_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "loops", ["loop_id"], name: "index_loops_on_loop_id", using: :btree
  add_index "loops", ["user_id"], name: "index_loops_on_user_id", using: :btree

  create_table "user_loops", force: :cascade do |t|
    t.integer  "knowtation_id", null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "user_loops", ["knowtation_id"], name: "index_user_loops_on_knowtation_id", using: :btree
  add_index "user_loops", ["user_id"], name: "index_user_loops_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                         null: false
    t.string   "user_type",                    default: "student", null: false
    t.string   "password_digest",                                  null: false
    t.string   "session_token",                                    null: false
    t.text     "bio"
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
    t.string   "profile_picture_file_name"
    t.string   "profile_picture_content_type"
    t.integer  "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
