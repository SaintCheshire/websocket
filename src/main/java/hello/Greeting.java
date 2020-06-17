package hello;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;

@Data
@Builder
public class Greeting {

    @NonNull
    private final String content;

}
