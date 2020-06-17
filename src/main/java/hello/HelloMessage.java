package hello;

import lombok.Data;
import lombok.NonNull;

@Data
public class HelloMessage {

    @NonNull
    private final String name;

}
