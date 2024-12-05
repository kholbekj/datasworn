require 'json'

def capitalize(string)
  string.split(/[ _]/).map(&:capitalize).join(' ')
end

source = 'starforged'

data = JSON.parse(File.read("datasworn/#{source}/#{source}.json"))

org_text = "* Moves\n"

data['moves'].keys.each do |move_category|
  org_text += "** #{capitalize(move_category)}\n"
  data['moves'][move_category]["contents"].keys.each do |move_name|
    org_text += "*** #{capitalize(move_name)}\n"
    # Each move has id, name, roll_type, trigger, text, outcomes, source
    move = data['moves'][move_category]["contents"][move_name]
    org_text += "#{move['text']}\n"
    org_text += "**** Outcomes\n"
    move['outcomes']&.keys&.each do |outcome_name|
      org_text += "#{capitalize(outcome_name)}: #{move['outcomes'][outcome_name]['text']}\n"
    end
    org_text += "**** Source\n"
    org_text += "Page: #{move['_source']['page']}\n"

    org_text += "\n"
  end
end

org_text.gsub!(/{{.+?}}/, '(TABLE)')
org_text.gsub!("__", "/")
# Turn the json id links into org heading links
org_text.gsub!(/\[([^\]]+)\]\(.+?\)/, '[[*\1][\1]]')

File.write("#{source}_orgdown.txt", org_text)
