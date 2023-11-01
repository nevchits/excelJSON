import pandas
import datetime

excel_data_df = pandas.read_excel('directory_cleaned.xls')
json_str = excel_data_df.to_json()
print('Excel Sheet to JSON:\n', json_str)

#write to file
f = open("directory_json.json", "w")
f.write(json_str)
f.close()