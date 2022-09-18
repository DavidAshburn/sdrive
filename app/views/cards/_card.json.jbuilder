json.extract! card, :id, :shots, :length, :score, :user_id, :course_id, :variant_id, :created_at, :updated_at
json.url card_url(card, format: :json)
