require 'spec_helper'

describe Order do
  it "has a status of new after being created" do
    FactoryBot.create(:order).status.should == "new"
  end
end
