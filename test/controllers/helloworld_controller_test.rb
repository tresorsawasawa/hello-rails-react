require 'test_helper'

class HelloworldControllerTest < ActionDispatch::IntegrationTest
  test 'should get greeting:string' do
    get helloworld_greeting: string_url
    assert_response :success
  end
end
