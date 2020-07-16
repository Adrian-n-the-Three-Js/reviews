\c reviewcomp

CREATE INDEX index_reviews_on_hotel_id ON reviews using btree ( hotel_id );
