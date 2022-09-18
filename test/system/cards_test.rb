require "application_system_test_case"

class CardsTest < ApplicationSystemTestCase
  setup do
    @card = cards(:one)
  end

  test "visiting the index" do
    visit cards_url
    assert_selector "h1", text: "Cards"
  end

  test "should create card" do
    visit cards_url
    click_on "New card"

    fill_in "Course", with: @card.course_id
    fill_in "Length", with: @card.length
    fill_in "Score", with: @card.score
    fill_in "Shots", with: @card.shots
    fill_in "User", with: @card.user_id
    fill_in "Variant", with: @card.variant_id
    click_on "Create Card"

    assert_text "Card was successfully created"
    click_on "Back"
  end

  test "should update Card" do
    visit card_url(@card)
    click_on "Edit this card", match: :first

    fill_in "Course", with: @card.course_id
    fill_in "Length", with: @card.length
    fill_in "Score", with: @card.score
    fill_in "Shots", with: @card.shots
    fill_in "User", with: @card.user_id
    fill_in "Variant", with: @card.variant_id
    click_on "Update Card"

    assert_text "Card was successfully updated"
    click_on "Back"
  end

  test "should destroy Card" do
    visit card_url(@card)
    click_on "Destroy this card", match: :first

    assert_text "Card was successfully destroyed"
  end
end
